import Card from "./Card";
function Services() {
    return (
        <div className="container services">
            <h2 className="main-title text-center">УСЛУГИ</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Вино туризъм" img="card1.png" text="Качествени вина, отгледани в престижни винарни." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Еко Туризъм" img="card2.png" text="Незабравими панорамни и виртуални разходки из цяла България навсякъде." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Кулинарство" img="card3.png" text="Традиционна българска и интернационална кухня с богати ястия." />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Водни забавления" img="water.png" text="Луксозни СПА хотели, къщи за гости и вили." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Шопинг" img="business.png" text="Разнообразие от шопинг места по Вашият вкус." />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Хотелиерство" img="hotel.png" text="Хотели от всеки тип, подходящи както за семейства, така и за животни." />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Services;
