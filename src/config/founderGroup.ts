export const FOUNDER_GROUP_URL = "https://chat.whatsapp.com/JVK1uKzznY13dvw9iuuQ18?s=hd&p=i&ilr=4";

export const founderGroupIsAvailable = (() => {
  try {
    const groupUrl = new URL(FOUNDER_GROUP_URL);

    return groupUrl.protocol === "https:"
      && groupUrl.hostname === "chat.whatsapp.com"
      && /^\/[A-Za-z0-9_-]+$/.test(groupUrl.pathname);
  } catch {
    return false;
  }
})();
