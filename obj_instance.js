function checkIfInstanceOf(obj, classFunction) {
    if (obj == null || typeof classFunction !== "function") {
        return false;
    }

    let proto = Object(obj);

    while (proto != null) {
        if (proto.constructor === classFunction) {
            return true;
        }
        proto = Object.getPrototypeOf(proto);
    }

    return false;
}
