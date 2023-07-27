function RenderDom(root, elements) {
  function createElement(elements) {
    if (elements.length === 0) {
      return undefined;
    }

    const element = document.createElement(elements.type);
    for (const keys in elements.props) {
      element[keys] = elements.props[keys];
    }

    if (typeof elements.children === "object") {
      const emptyFragment = document.createDocumentFragment();
      for (let i = 0; i < elements.children.length; i++) {
        const el = createElement(elements.children[i]);
        emptyFragment.appendChild(el);
      }
      element.appendChild(emptyFragment);
    } else {
      element.innerHTML = elements.children;
    }

    return element;
  }
  const children = createElement(elements);
  root.appendChild(children);
}

const root = document.querySelector("#root");

const child = {
  type: "div",
  props: {
    className: "box",
    id: "ok_ok",
  },
  children: [
    {
      type: "h2",
      props: {
        id: "heading",
      },
      children: "hello world ",
    },
  ],
};

RenderDom(root, child);
