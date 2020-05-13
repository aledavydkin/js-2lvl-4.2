export default function findBy(key, name) {
  return (el) => el[key] === name;
}
