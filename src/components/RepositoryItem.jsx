export function RepositoryItem(props) {
  return (
    < li >
      <strong>{props.repository.name ?? 'Valor padrão'}</strong>
      <p>Forms in React</p>

      <a href={props.repository.link}>
        Acessasr repositório
      </a>
    </li >
  );
}