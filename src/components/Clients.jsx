import { ClientsLogo } from "../constants"
import styles, { layout } from "../style"

const Clients = () => {
  return (
    <section className={`${layout.section} flex-col justify-center items-center`}>
      <p className={`${styles.paragraph}`}>Finance flow has been featured on</p>
      <div className="w-full flex flex-wrap justify-center md:justify-between my-[34px]">
        {ClientsLogo.map((client) => (
          <div className="p-[4px]" key={client.id}>
            <img className="w-[134px] md:w-[184px]" src={client.logo} alt="client_logo"/>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Clients