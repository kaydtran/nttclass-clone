// Google Apps Script for NTT Class
const SPREADSHEET_ID = 'YOUR_SPREADSHEET_ID'; // Replace with actual ID

// Handle GET requests
function doGet(e) {
  const action = e.parameter.action;
  let result;
  
  try {
    switch(action) {
      case 'getSchedule':
        result = getSheetData('Schedule');
        break;
      case 'getClasses':
        result = getSheetData('Classes');
        break;
      case 'getTeachers':
        result = getSheetData('Teachers');
        break;
      case 'getSettings':
        result = getSettingsData();
        break;
      default:
        result = { error: 'Unknown action' };
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: true, data: result }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle POST requests
function doPost(e) {
  const action = e.parameter.action;
  let result;
  
  try {
    switch(action) {
      case 'addStudent':
        result = addRowToSheet('Students', JSON.parse(e.parameter.data));
        break;
      case 'addContact':
        result = addRowToSheet('Contacts', JSON.parse(e.parameter.data));
        break;
      case 'login':
        result = handleLogin(e.parameter.username, e.parameter.password);
        break;
      default:
        throw new Error('Unknown POST action');
    }
    
    return ContentService.createTextOutput(JSON.stringify({ success: true, data: result }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch(err) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Helper: Get data from a sheet as Array of Objects
function getSheetData(sheetName) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(sheetName);
  if (!sheet) return [];
  
  const data = sheet.getDataRange().getValues();
  if (data.length < 2) return [];
  
  const headers = data[0];
  const rows = data.slice(1);
  
  return rows.map(row => {
    let obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index];
    });
    return obj;
  });
}

// Helper: Get Settings (key-value pair sheet)
function getSettingsData() {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName('Settings');
  if (!sheet) return {};
  
  const data = sheet.getDataRange().getValues();
  let settings = {};
  
  data.forEach(row => {
    if (row[0] && row[1] !== undefined) {
      settings[row[0]] = row[1];
    }
  });
  
  return settings;
}

// Helper: Add row to sheet
function addRowToSheet(sheetName, dataObj) {
  const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(sheetName);
  if (!sheet) throw new Error('Sheet not found');
  
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
  const newRow = headers.map(header => {
    if (header === 'id' && !dataObj.id) return Utilities.getUuid();
    if (header === 'createdAt' || header === 'date') return new Date().toISOString();
    return dataObj[header] || '';
  });
  
  sheet.appendRow(newRow);
  return { id: newRow[0], status: 'success' };
}

// Mock Login
function handleLogin(username, password) {
  const users = getSheetData('Users');
  const user = users.find(u => u.username === username && u.password === password);
  
  if (user) {
    return { token: Utilities.getUuid(), role: user.role, username: user.username };
  }
  throw new Error('Invalid credentials');
}
