export const transformAuthPermissions = items =>
  items.map(i => transformAuthPermission(i));

export const transformAuthPermission = item => ({
  id: item.id,
  model: item.model,
  action: item.action
});

export const isAuthorizedRoute = (permissions, module, action) => {
  return !!permissions.filter(p => p.model === module && p.action === action)
    .length;
};

export const isAuthorizedRoutes = (permissions, pages) => {
  let isValid = false;
  pages = pages.join(",");
  permissions.forEach(p => {
    if (isValid) return;
    isValid = pages.includes(p.model);
  });
  return isValid;
};
