import { RepositoryItem } from "./RepositoryItem";


export function RepositoryList() {
     return(
        <section className="repository-list">
               <h1>Lista de repositórios</h1>

               <RepositoryItem repository="unform2"/>
               <RepositoryItem />
               <RepositoryItem />

        </section>
     )
  }
