export default function Sidebar() {

    const usuario = {img: "assets/img/catanacomics.svg", nome: "catanacomics", sobrenome:"Catana" }

    const {img, nome, sobrenome} = usuario;

    return (
        <div class="sidebar">
            <Usuario img={img} nome={nome} sobrenome={sobrenome} />

            <div class="sugestoes">
                <Titulo />
                <Sugestao />
            </div>
            <Links />
            <Copyright />
        </div>
    )
}

function Usuario(props) {

    const {img , nome, sobrenome} = props;

    return (
        <div class="usuario">
            <img src={img} />
            <div class="texto">
                <strong>{nome}</strong>
                {sobrenome}
            </div>
        </div>
    )
}

function Titulo() {
    return (
        <div class="titulo">
            Sugestões para você
            <div>Ver tudo</div>
        </div>
    )
}

function Sugestao() {

    const object = [
        { img: "assets/img/bad.vibes.memes.svg", nome: "bad.vibes.memes", razao: "Segue você" },
        { img: "assets/img/chibirdart.svg", nome: "chibirdart", razao: "Segue você" },
        { img: "assets/img/razoesparaacreditar.svg", nome: "razoesparaacreditar", razao: "Novo no Instagram" },
        { img: "assets/img/adorable_animals.svg", nome: "adorable_animals", razao: "Segue você" },
        { img: "assets/img/smallcutecats.svg", nome: "smallcutecats", razao: "Segue você" }
    ];

    return (

        object.map((array) => (

            <div class="sugestao">

                <div class="usuario">
                    <img src={array.img} />
                    <div class="texto">
                        <div class="nome">{array.nome}</div>
                        <div class="razao">{array.razao}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
            </div>

        )
        )
    )
}

function Links() {

    return (
        <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
        </div>
    )
}

function Copyright() {

    return (
        <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
        </div>
    )
}