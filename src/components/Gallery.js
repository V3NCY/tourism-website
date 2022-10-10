import Card from '../components/Card';

function Gallery(props) {
    return (

        <div className="container gallery">
            <h2 className="main-title text-center">ГАЛЕРИЯ</h2>
            <div className="card-gallery-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="София" img="bg-1.jpg" />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Пловдив" img="bg-6.jpg" />
                        </div>

                        <div className="col-md-4 mb-2">
                            <Card title="Батак, Цигов Чарк" img="bg-3.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-12">
                <div className="row">
                    <div className="col-md-4 mb-2">
                        <Card title="Несебър" img="bg-4.jpg" />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Родопите" img="bg-5.jpg" />
                    </div>
                    <div className="col-md-4 mb-2">
                        <Card title="Албена" img="bg-2.jpg" />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Gallery;
