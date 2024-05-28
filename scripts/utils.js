export const getURI = (data) => {
    // Check if 'data' exists and has 'assets' array
    if (data && Array.isArray(data.assets) && data.assets.length > 0) {
      // Destructure the first asset from the assets array
      const [firstAsset] = data.assets;
      
      // Use optional chaining to safely access the URI
      return firstAsset?.uri || null;
    }
    // Return null if conditions are not met
    return null;
  };