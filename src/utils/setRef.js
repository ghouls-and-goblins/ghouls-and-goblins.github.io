export const setRef = (node, inertValue) => {
	if (!node) {
		return null;
	}

	if (inertValue) {
		return node.setAttribute('inert', '');
	}

	return node.removeAttribute('inert');
}
