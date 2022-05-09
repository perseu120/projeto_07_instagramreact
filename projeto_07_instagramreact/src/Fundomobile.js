export default function Fundomobile(props) {

    const icon = ["home", "search-outline", "add-circle-outline", "heart-outline", "person-outline"]

    return (

        <div class="fundo-mobile">
            {icon.map((name) => (<ion-icon name={name}></ion-icon>
            ))}
        </div>

    )
}