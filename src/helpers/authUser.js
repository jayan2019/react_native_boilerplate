export const transformAuthUser = user => ({
  id: user.id,
  uuid: user.remote_id,
  avatar: user.avatar,
  name: user.name,
  email: user.email
});
