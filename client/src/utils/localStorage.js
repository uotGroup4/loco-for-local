export const getSavedBookIds = () => {
    const savedVendorIds = localStorage.getItem('saved_vendors')
        ? JSON.parse(localStorage.getItem('saved_vendors'))
        : [];

    return savedVendorIds;
};

export const saveVendorIds = (vendorIdArr) => {
    if (vendorIdArr.length) {
        localStorage.setItem('saved_vendors', JSON.stringify(vendorIdArr));
    } else {
        localStorage.removeItem('saved_vendors');
    }
};

export const removeVendorId = (vendorId) => {
    const savedVendorIds = localStorage.getItem('saved_vendors')
        ? JSON.parse(localStorage.getItem('saved_vendors'))
        : null;

    if (!savedVendorIds) {
        return false;
    }

    const updatedSavedVendorIds = savedVendorIds?.filter((savedVendorId) => savedVendorId !== vendorId);
    localStorage.setItem('saved_vendors', JSON.stringify(updatedSavedVendorIds));

    return true;
};