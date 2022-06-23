const translates = {
    en: "Hello, ",
    ru: "Привет, ",
}
export function sayHello(name, lang = "en") {
    return translates[lang] + name;
}
