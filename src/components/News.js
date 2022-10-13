import Card from "./Card";

function News() {

    return (
        <div className="container services">
            <h2 className="main-title text-center">НОВИНИ</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Регион" img="region.png" text="Република България е държава в Югоизточна Европа. Разположена е в източната част на Балканския полуостров и заема 23% от неговата територия. Граничи на север с Румъния; на запад – със Сърбия и Северна Македония; на юг – с Гърция и на югоизток – с Турция." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Знаме" img="flag.png" text="Националното знаме на България има правоъгълна форма и се състои от три цвята: бял, зелен и червен, разположени хоризонтално от горе надолу, като цветните полета са еднакви по форма и размери. Формата и цветовете на националния флаг на България са записани в конституцията на Република България - чл. 166." />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Герб" img="coa.png" text="Съгласно Конституцията от 1991 г. България е парламентарна република, с ясно изразено разделение на властите – законодателна, изпълнителна, съдебна. Националните символи на българската държава са знамето, химнът и гербът на Републиката." />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="col-md-12">
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
            </div> */}
        </div>
    );
}
export default News;