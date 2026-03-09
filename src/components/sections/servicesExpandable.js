const COMPACT_SERVICES = [
  {
    icon: "/assets/icons/clean-teeth.svg",
    title: "Teeth Whitening",
    description:
      "Teeth whitening is an effective solution to remove stains and discoloration. Perfect way to boost your confidence.",
  },
  {
    icon: "/assets/icons/implant.svg",
    title: "Dental Implant",
    description:
      "Dental implants provide a lasting fix for missing teeth. A reliable and long-lasting choice for your dental needs.",
  },
  {
    icon: "/assets/icons/tooth-_1_.svg",
    title: "Dental Exams",
    description:
      "Regular dental exams help protect your teeth and gums, catch problems early, and keep your smile bright and healthy.",
  },
];

const DETAILED_SERVICES = [
  {
    title: "Dental Checkup",
    description:
      "Comprehensive evaluation to detect issues early and create a treatment plan tailored to your smile.",
    image: "/assets/images/services/Dental-Checkup.png",
  },
  {
    title: "Oral Hygiene",
    description:
      "Professional cleaning and preventive care to keep your gums healthy and your teeth free from plaque buildup.",
    image: "/assets/images/services/Oral-Hygiene.png",
  },
  {
    title: "Teeth Whitening",
    description:
      "Safe cosmetic treatment that brightens enamel and helps restore a natural, confident-looking smile.",
    image: "/assets/images/services/Teeth-Whitening.jpeg",
  },
  {
    title: "Orthodontics",
    description:
      "Alignment treatments designed to improve bite, function, and aesthetics for long-term oral health.",
    image: "/assets/images/services/Orthodontics.png",
  },
  {
    title: "Root Canal Treatment",
    description:
      "Endodontic care that removes infection, relieves pain, and preserves your natural tooth whenever possible.",
    image: "/assets/images/services/Root-Canal-Treatment.png",
  },
  {
    title: "Dental Implants",
    description:
      "Durable tooth replacement solution that restores chewing function and supports your facial structure.",
    image: "/assets/images/services/Dental-Implants.png",
  },
  {
    title: "Oral Surgery",
    description:
      "Minor and advanced surgical procedures performed with modern protocols for comfort and recovery.",
    image: "/assets/images/services/Oral-Surgery.png",
  },
];

function createNode(tagName, className, textContent) {
  const node = document.createElement(tagName);
  if (className) {
    node.className = className;
  }
  if (textContent) {
    node.textContent = textContent;
  }
  return node;
}

export function createExpandableServicesSection({ variant = "home" } = {}) {
  const isAbout = variant === "about";
  const section = createNode(
    "section",
    isAbout
      ? "py-20 px-6 md:px-16 bg-slate-50 text-gray-900"
      : "bg-blue-600 py-20 px-6 md:px-16 text-white mt-12"
  );
  section.id = "services";

  const container = createNode("div", "max-w-6xl mx-auto text-center");
  const title = createNode(
    "h2",
    `text-3xl md:text-4xl font-extrabold mb-12 ${
      isAbout ? "text-gray-900" : "text-white"
    }`,
    "Our Dental Services"
  );
  container.appendChild(title);

  const compactGrid = createNode("div", "grid gap-8 md:grid-cols-3");
  const arrowNodes = [];
  let expanded = false;

  const expandedContainer = createNode(
    "div",
    "max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out"
  );
  const expandedContent = createNode("div", "pt-10");
  const detailedTitle = createNode(
    "h3",
    `text-2xl md:text-3xl font-bold mb-8 ${isAbout ? "text-gray-900" : "text-white"}`,
    "Explore Our Treatments"
  );
  expandedContent.appendChild(detailedTitle);

  const detailedGrid = createNode("div", "grid gap-6 sm:grid-cols-2 lg:grid-cols-3");
  DETAILED_SERVICES.forEach((service) => {
    const card = createNode(
      "article",
      "bg-white rounded-2xl overflow-hidden text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    );
    const image = createNode("img", "w-full h-44 object-cover");
    image.src = service.image;
    image.alt = service.title;

    const body = createNode("div", "p-5");
    const cardTitle = createNode("h4", "text-lg font-bold text-gray-900 mb-2", service.title);
    const cardDescription = createNode("p", "text-sm text-gray-600 leading-relaxed", service.description);

    body.append(cardTitle, cardDescription);
    card.append(image, body);
    detailedGrid.appendChild(card);
  });

  expandedContent.appendChild(detailedGrid);
  expandedContainer.appendChild(expandedContent);

  const setExpanded = (nextState) => {
    expanded = nextState;

    if (expanded) {
      expandedContainer.classList.remove("opacity-0");
      expandedContainer.classList.add("opacity-100");
      expandedContainer.style.maxHeight = `${expandedContent.scrollHeight}px`;
      arrowNodes.forEach((arrow) => arrow.classList.add("rotate-180"));
      window.setTimeout(() => {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 120);
      return;
    }

    if (expandedContainer.style.maxHeight === "none") {
      expandedContainer.style.maxHeight = `${expandedContent.scrollHeight}px`;
      requestAnimationFrame(() => {
        expandedContainer.style.maxHeight = "0px";
      });
    } else {
      expandedContainer.style.maxHeight = "0px";
    }
    expandedContainer.classList.remove("opacity-100");
    expandedContainer.classList.add("opacity-0");
    arrowNodes.forEach((arrow) => arrow.classList.remove("rotate-180"));
  };

  expandedContainer.addEventListener("transitionend", (event) => {
    if (event.propertyName === "max-height" && expanded) {
      expandedContainer.style.maxHeight = "none";
    }
  });

  COMPACT_SERVICES.forEach((service) => {
    const card = createNode(
      "article",
      isAbout
        ? "bg-white rounded-3xl p-8 text-center shadow-sm border border-gray-100 transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
        : "group bg-blue-500/30 rounded-3xl p-8 text-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:scale-[1.02]"
    );

    const iconWrap = createNode(
      "div",
      `w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto transition-all ${
        isAbout ? "bg-blue-100" : "bg-blue-600"
      }`
    );
    const icon = createNode("img", `w-10 h-10 ${isAbout ? "" : "invert"}`);
    icon.src = service.icon;
    icon.alt = service.title;
    iconWrap.appendChild(icon);

    const cardTitle = createNode(
      "h3",
      `text-xl font-bold mb-4 ${isAbout ? "text-gray-900" : "text-white group-hover:text-gray-900"}`,
      service.title
    );
    const cardDescription = createNode(
      "p",
      `mb-6 ${isAbout ? "text-gray-600" : "text-blue-100 group-hover:text-gray-700"}`,
      service.description
    );

    const button = createNode(
      "button",
      isAbout
        ? "inline-flex items-center justify-center gap-2 border border-blue-600 text-blue-600 font-semibold px-5 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all"
        : "inline-flex items-center justify-center gap-2 border border-blue-200 text-white font-semibold px-5 py-2 rounded-lg transition-all group-hover:border-blue-600 group-hover:text-blue-600 hover:bg-blue-600 hover:text-white"
    );
    button.type = "button";
    button.textContent = "Learn More";

    const arrow = createNode("span", "text-base leading-none transition-transform duration-300", "▾");
    arrowNodes.push(arrow);
    button.appendChild(arrow);
    button.addEventListener("click", () => setExpanded(!expanded));

    card.append(iconWrap, cardTitle, cardDescription, button);
    compactGrid.appendChild(card);
  });

  container.append(compactGrid, expandedContainer);
  section.appendChild(container);

  return section;
}
