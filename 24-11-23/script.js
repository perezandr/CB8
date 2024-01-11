const createCustomElement = (type, className, text) => {
  const element = document.createElement(type);
  if (className) {
    element.className = className;
  }
  if (text) {
    type === "input"
      ? (element.placeholder = text)
      : (element.textContent = text);
  }

  return element;
};

const createImgElement = (className, url, altText) => {
  const imageEl = createCustomElement("img", className);
  imageEl.src = url;
  imageEl.alt = altText;

  return imageEl;
};

const createCard = (imgUrl, title, text, isIcon) => {
  const iconWrapper = createCustomElement(
    "div",
    isIcon ? "icon-wrapper" : "card"
  );
  const imgEl = createImgElement(
    isIcon ? "icon-img" : "card-img",
    imgUrl,
    isIcon ? "icon" : "card"
  );
  const titleEl = createCustomElement(
    "h3",
    isIcon ? "icon-name" : "card-name",
    title
  );
  const textEl = createCustomElement(
    "p",
    isIcon ? "icon-description" : "card-description",
    text
  );

  iconWrapper.append(imgEl, titleEl, textEl);

  return iconWrapper;
};

const menuButtonsData = [
  { type: "button", className: "primary-button", text: "Home" },
  { type: "button", className: "primary-button", text: "About" },
  { type: "button", className: "primary-button", text: "Shop" },
  { type: "button", className: "primary-button", text: "Pages" },
  { type: "button", className: "primary-button", text: "Contact" },
];

const sideMenuButtonsData = [
  { type: "button", className: "secondary-button", text: "Sign up" },
  { type: "button", className: "secondary-button", text: "Order now" },
];

const iconsData = [
  {
    imgUrl:
      "https://doodleipsum.com/100x100/avatar-5?i=0e894b55befc8f9711ea6d76d3e4816f",
    title: "Lorem, ipsum.",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
    isIcon: true,
  },
  {
    imgUrl:
      "https://doodleipsum.com/100x100/avatar-5?i=55997c9e92a1a5488d346fcea580e5eb",
    title: "Lorem ipsum dolor sit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis repudiandae ipsa facere, doloribus nulla ex? Molestiae a sed quia.",
    isIcon: true,
  },
  {
    imgUrl:
      "https://doodleipsum.com/100x100/avatar-5?i=c04b6e7f620fb608af9d369df1e4a9cc",
    title: "Lorem ipsum dolor sit amet.",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
    isIcon: true,
  },
];

const cardsData = [
  {
    imgUrl:
      "https://doodleipsum.com/200x200/abstract?i=bca1e8588e68e8c73a6b721edae668c9",
    title: "Lorem ipsum dolor sit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis.",
    isIcon: false,
  },
  {
    imgUrl:
      "https://doodleipsum.com/200x200/abstract?i=533d71e7733d1ad05ecdc25051eed663",
    title: "Lorem ipsum dolor sit.",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, saepe consequatur!",
    isIcon: false,
  },
  {
    imgUrl:
      "https://doodleipsum.com/200x200/abstract?i=cb0515299c600124805d923f3619c1ad",
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    isIcon: false,
  },
];

const navBar = () => {
  const wrapperNavBar = createCustomElement("nav", "navbar");
  const logoNavBar = createImgElement("logo", "./media/logo.svg", "logo");
  const menuButtonsWrapper = createCustomElement("ul", "menu-button");

  const navButtons = menuButtonsData.map((button) => {
    const buttonEl = createCustomElement(
      button.type,
      button.className,
      button.text
    );
    const listEl = createCustomElement("li");
    listEl.appendChild(buttonEl);

    return listEl;
  });

  const sideMenuButtonsWrapper = createCustomElement("ul", "side-menu-button");

  const sideNavButtons = sideMenuButtonsData.map((button) => {
    const buttonEl = createCustomElement(
      button.type,
      button.className,
      button.text
    );
    const listEl = createCustomElement("li");
    listEl.appendChild(buttonEl);

    return listEl;
  });

  menuButtonsWrapper.append(...navButtons);
  sideMenuButtonsWrapper.append(...sideNavButtons);
  wrapperNavBar.append(logoNavBar, menuButtonsWrapper, sideMenuButtonsWrapper);

  return wrapperNavBar;
};

const heroSection = () => {
  const heroContainer = createCustomElement("section", "hero");
  const heroWrapperText = createCustomElement("div", "heroEl");
  const heroTitle = createCustomElement("h1", "hero-title", "Hero!");
  const heroText = createCustomElement(
    "p",
    "hero-text",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, suscipit."
  );
  const heroButton = createCustomElement(
    "button",
    "hero-button",
    "Get started"
  );
  const heroImg = createImgElement(
    "hero-image",
    "https://doodleipsum.com/700x700/outline?i=238f14c2ec23befb1ebee53ec4abf03b",
    "Hero image"
  );

  heroContainer.append(heroWrapperText, heroImg);
  heroWrapperText.append(heroTitle, heroText, heroButton);

  return heroContainer;
};

const iconSection = () => {
  const iconSection = createCustomElement("section", "icon");
  const iconHeader = createCustomElement("div", "icon-header");
  const iconTitle = createCustomElement("h2", "icon-title", "Icons!");
  const iconText = createCustomElement(
    "p",
    "icon-text",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, perferendis."
  );
  iconHeader.append(iconTitle, iconText);
  const iconContainer = createCustomElement("div", "icon-container");

  const icons = iconsData.map((data) =>
    createCard(data.imgUrl, data.title, data.text, data.isIcon)
  );
  iconContainer.append(...icons);

  iconSection.append(iconHeader, iconContainer);

  return iconSection;
};

const infoSection = () => {
  const infoContainer = createCustomElement("section", "info");
  const infoWrapperText = createCustomElement("div", "infoEl");
  const infoTitle = createCustomElement("h1", "info-title", "Info!");
  const infoText = createCustomElement(
    "p",
    "info-text",
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, suscipit."
  );
  const infoButton = createCustomElement("button", "info-button", "Find more");
  const infoImg = createImgElement(
    "info-image",
    "https://doodleipsum.com/700x700/flat?i=0c7245224456ca06abb5951c1bf9f0ce",
    "info image"
  );

  infoContainer.append(infoImg, infoWrapperText);
  infoWrapperText.append(infoTitle, infoText, infoButton);

  return infoContainer;
};

const blogSection = () => {
  const blogSection = createCustomElement("section", "blog");
  const blogHeader = createCustomElement("div", "blog-header");
  const blogTitle = createCustomElement("h2", "blog-title", "Blog!");
  const blogText = createCustomElement(
    "p",
    "blog-text",
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, perferendis."
  );
  blogHeader.append(blogTitle, blogText);
  const cardContainer = createCustomElement("div", "card-container");

  const cards = cardsData.map((data) =>
    createCard(data.imgUrl, data.title, data.text, data.isIcon)
  );
  cardContainer.append(...cards);

  blogSection.append(blogHeader, cardContainer);

  return blogSection;
};

const contactUs = () => {
  const contactUsSection = createCustomElement("section", "contact-us");
  const contactWrapper = createCustomElement("div", "contact-wrapper");
  const contactTitle = createCustomElement(
    "h2",
    "contact-title",
    "Contact us!"
  );
  const contactText = createCustomElement(
    "p",
    "contact-text",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, corrupti."
  );
  contactWrapper.append(contactTitle, contactText);
  const contactForm = createCustomElement("div", "contact-form");
  const inputOne = createCustomElement("div", "input-group");
  const inputTwo = createCustomElement("div", "input-group");
  const messageArea = createCustomElement("textarea", "message", "...");
  const contactButton = createCustomElement(
    "button",
    "secondary-button",
    "Submit"
  );
  contactForm.append(inputOne, inputTwo, messageArea, contactButton);
  const firstNameInput = createCustomElement(
    "input",
    "first-name",
    "First name"
  );
  const lastNameInput = createCustomElement("input", "last-name", "Last name");

  inputOne.append(firstNameInput, lastNameInput);
  const emailInput = createCustomElement("input", "email", "E-mail");
  const telInput = createCustomElement("input", "tel", "6969696969");
  inputTwo.append(emailInput, telInput);

  contactUsSection.append(contactWrapper, contactForm);

  return contactUsSection;
};

const footerSection = () => {
  const footer = createCustomElement("footer");
  const footerColumnOne = createCustomElement("div", "footer-columnOne");
  const footerColumnTwo = createCustomElement("div", "footer-columnTwo");
  const footerColumnThree = createCustomElement("div", "footer-columnThree");
  footer.append(footerColumnOne, footerColumnTwo, footerColumnThree);

  const footerLogo = createImgElement("logo", "./media/logo.svg", "logo");
  const footerText = createCustomElement(
    "p",
    "",
    "Lorem, ipsum dolor sit amet consectetur adipisicing."
  );
  footerColumnOne.append(footerLogo, footerText);

  const instaIcon = createImgElement("", "./media/instagram.svg", "instagram");
  const fbIcon = createImgElement("", "./media/facebook.svg", "facebook");
  const twitIcon = createImgElement("", "./media/twitter.svg", "twitter");
  footerColumnTwo.append(instaIcon, fbIcon, twitIcon);

  const footerTitle = createCustomElement("h3", "footer-title", "Call us");
  const footerTelephone = createCustomElement(
    "p",
    "footer-telephone",
    "000000000"
  );
  footerColumnThree.append(footerTitle, footerTelephone);

  return footer;
};

document.body.append(
  navBar(),
  heroSection(),
  iconSection(),
  infoSection(),
  blogSection(),
  contactUs(),
  footerSection()
);
