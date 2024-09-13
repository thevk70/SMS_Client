function getBaseUrl() {
    return "https://sms-8lax.onrender.com/";
//  return "http://localhost:7289/";
}

function clearAuthenticationData() {
  sessionStorage.removeItem("token");
  localStorage.removeItem("userPreferences");
}

export {getBaseUrl,clearAuthenticationData};
