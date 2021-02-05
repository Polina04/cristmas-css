export function create(el, options) {
  let element = null;
  const {
    classNames, child, parent, attributes,
  } = options;
  try {
    element = document.createElement(el);
  } catch (error) {
    throw new Error('Unable to create HTMLElement! Give a proper tag name');
  }

  if (classNames) {
    element.classList.add(...classNames.split(' '));
  }

  if (child && Array.isArray(child)) {
    child.forEach(
      (childElement) => childElement && element.appendChild(childElement),
    );
  } else if (child && typeof child === 'object') {
    element.appendChild(child);
  } else if (child && typeof child === 'string') {
    element.innerHTML = child;
  }

  if (parent) {
    parent.appendChild(element);
  }

  if (attributes && attributes.length) {
    attributes.forEach(([attrName, attrValue]) => {
      if (attrValue === '') {
        element.setAttribute(attrName, '');
      } else if (
        attrName.match(
          /value|id|placeholder|cols|rows|autocorrect|spellcheck|src|for|name|type|action|required|href/,
        )
      ) {
        element.setAttribute(attrName, attrValue);
      } else {
        element.dataset[attrName] = attrValue;
      }
    });
  }
  return element;
}
