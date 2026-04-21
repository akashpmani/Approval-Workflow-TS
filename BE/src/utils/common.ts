function createPONumber() : string {
    const timestamp = Date.now();
    const randomNum = Math.floor(Math.random() * 1000);
    return `PO-${timestamp}-${randomNum}`;
}

export { createPONumber }