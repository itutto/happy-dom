import Element from '../element/Element';
import INonDocumentTypeChildNode from './INonDocumentTypeChildNode';

/**
 * Non Document Child node utility.
 */
export default class NonDocumentChildNodeUtility {
	/**
	 * Previous element sibling.
	 *
	 * @param childNode Child node.
	 * @return Element.
	 */
	public static previousElementSibling(childNode: INonDocumentTypeChildNode): Element {
		let sibling = childNode.previousSibling;
		while (sibling && sibling.nodeType !== Element.ELEMENT_NODE) {
			sibling = sibling.previousSibling;
		}
		return <Element>sibling;
	}

	/**
	 * Next element sibling.
	 *
	 * @param childNode Child node.
	 * @return Element.
	 */
	public static nextElementSibling(childNode: INonDocumentTypeChildNode): Element {
		let sibling = childNode.nextSibling;
		while (sibling && sibling.nodeType !== Element.ELEMENT_NODE) {
			sibling = sibling.nextSibling;
		}
		return <Element>sibling;
	}
}
