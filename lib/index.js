export default (path, current_root = {}, factory = () => ({})) => {
  const path_parts = path.split('.');

  path_parts.forEach(value => {
    current_root = current_root[value] || (current_root[value] = factory());
  });

  return current_root;
};
