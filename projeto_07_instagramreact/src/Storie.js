export default function Storie() {
    const object = [
        {
            img: "assets/img/9gag.svg",
            usuario: "9gag"
        },
        {
            img: "assets/img/meowed.svg",
            usuario: "meowed"
        },
        {
            img: "assets/img/barked.svg",
            usuario: "barked"
        },
        {
            img: "assets/img/nathanwpylestrangeplanet.svg",
            usuario: "nathanwpylestrangeplanet"
        },
        {
            img: "assets/img/wawawicomics.svg",
            usuario: "9wawawicomicsgag"
        },
        {
            img: "assets/img/respondeai.svg",
            usuario: "respondeai"
        },
        {
            img: "assets/img/filomoderna.svg",
            usuario: "filomoderna"
        },
        {
            img: "assets/img/memeriagourmet.svg",
            usuario: "memeriagourmet"
        },

    ]
    return (
        <div class="stories">

            {object.map( (story)=>(
                 <Story img={story.img} name={story.usuario} />
            ))}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )

}

function Story(props) {

    const { img, usuario } = props;

    return (
        <div class="story">
            <div class="imagem">
                <img src={img} />
            </div>
            <div class="usuario">
                {usuario}
            </div>
        </div>
    )
}