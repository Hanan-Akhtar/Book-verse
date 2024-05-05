import './Style.css'
import aboutimg from '../images/about-img-1.jpeg'
import authorimg from '../images/author-img.jpeg'
import ultimate from '../images/ultimate.png'
import ultra from '../images/Ultra.png'
import mega from '../images/mega.jpeg.png'
import hyper from '../images/hyper.png'
import { useContextApi } from './CartContext'
import { useEffect ,useState} from 'react'
import CustomDrawer from './CartDrawer'
const About = () => {
    const { cartItems, setCartItems, isCartOpen, setIsCartOpen } = useContextApi();
    const [selectedBook, setSelectedBooks] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);


    const increaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++;
        setCartItems(newCartItems);
        calculateTotalPrice(newCartItems); 
    };
    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        newCartItems.splice(index, 1);
        setCartItems(newCartItems);
    };

    const decreaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity > 1) {
            newCartItems[index].quantity--;
            setCartItems(newCartItems);
            calculateTotalPrice(newCartItems); 
        }
    };

    const calculateTotalPrice = (cartItems) => {
        let totalPrice = 0;
        cartItems.forEach(item => {
            totalPrice += item.price * item.quantity;
        });
        setTotalPrice(totalPrice);
    };

    const toggleCartDrawer = () => {
        setIsCartOpen(!isCartOpen);
    };

    // Calculate total price on initial render
    useEffect(() => {
        calculateTotalPrice(cartItems);
    }, [cartItems]);
    return (<>
        <div className=" bg-light">
            <div className='container' style={{ marginTop: "0px", paddingTop: "60px" }}>
                <div className='About-author'>
                    <div class=" p-100">
                        <div class="row  top-row">
                            <div class="col-12 col-sm-8  top-text">
                                <h1>About Author </h1>
                                <p>Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Cart Drawer */}
                    <CustomDrawer
                        cartItems={cartItems}
                        totalPrice={totalPrice}
                        isCartOpen={isCartOpen}
                        toggleCartDrawer={toggleCartDrawer}
                        removeFromCart={removeFromCart}
                        increaseQuantity={increaseQuantity}
                        decreaseQuantity={decreaseQuantity}
                        selectedBook={selectedBook}
                        calculateTotalPrice={calculateTotalPrice}
                    />
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 mb-4 about-img'>
                            <img className='img-fluid' alt='about-img' src={aboutimg} />
                        </div>
                        <div className='col-lg-6 col-md-6 mb-4 author-img'>
                            <img className='img-fluid' alt='author-img' src={authorimg} />
                        </div>
                        <div class='col-lg-3 col-md-6 mb-4 d-flex align-items-center'>
                            <div className='author-text'>
                                <i class="fas fa-quote-left color" ></i>
                                <p className='te.xt'>
                                    Elementum neque nulla mauris faucibus lorem nisl, eget quis duis amet lobortis non enim viverra feugiat vitae.

                                </p>
                                <p> JOHN ROBERTS</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="Award-winning p-100">
                    <div class="row top-row">
                        <div class="col-12 col-sm-6 top-text">
                            <h2>Award Winning Author</h2>
                            <p>Etiam donec fusce id hendrerit feugiat mauris etiam aenean ipsum eu iaculis integer gravida massa facilisi aliquam venenatis turpis proin nunc ac viverra sed ac pharetra non sit elit ullamcorper viverra tristique.</p>
                            <p>Sem eget sed pulvinar erat leo tortor bibendum orci, ac donec elementum sed et bibendum odio libero sed erat volutpat est quam congue praesent felis sed cras viverra feugiat et vitae adipiscing et nullam etiam placerat viverra nibh mi euismod orci neque vulputate varius vestibulum ante eget viverra iaculis velit, ultricies ante eget at placerat ac tincidunt facilisi augue neque condimentum volutpat sed dolor.</p>
                            <p>Magna tellus pulvinar vitae adipiscing imperdiet viverra nunc, egestas sem vel turpis amet ut fusce sagittis, quisque suspendisse fames eget risus quam posuere eu massa, consequat nec vestibulum fermentum velit nunc, dictum dui orci urna vitae est morbi purus amet, tortor elementum eu convallis turpis nibh odio enim.</p>
                            <div class="numbers">
                                <div><div class="animated-number">100k+</div>
                                    <div class="animated-text">copies sold</div></div>
                                <div>
                                    <div class="animated-number">19</div>
                                    <div class="animated-text">books</div>
                                </div>
                                <div>
                                    <div class="animated-number">4</div>
                                    <div class="animated-text">Award</div></div>
                            </div>
                        </div>

                    </div>
                </div>
                {/* Awards section strt here */}
                <hr></hr>
                <div className='row' style={{ marginBottom: "50px" }}>
                    <div className='row' >
                        <div className='col-lg-3 col-md-6 mb-4' style={{ height: "200px" }}>
                            <div className="box" >
                                <img className="box-img" src={ultra} alt="Image 1" />
                                <div className="box-body">
                                    <h5 className="box-title">Best Author Awards 2012</h5>
                                    <p className="box-text">Arcu pellentesque nisi consectetur netus aenean metus sit mattis sit sed.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-4' style={{ height: "200px" }}>
                            <div className="box">
                                <img className="box-img" src={mega} alt="Image 2" />
                                <div className="box-body">
                                    <h5 className="box-title">World's #1 Best-selling Book</h5>
                                    <p className="box-text">Diam nibh non in enim nunc suscipit risus, adipiscing aenean quisque viverra.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-4' style={{ height: "200px" }}>
                            <div className="box">
                                <img className="box-img" src={hyper} alt="Image 3" />
                                <div className="box-body">
                                    <h5 className="box-title">NYT Best-selling Author 2014</h5>
                                    <p className="box-text">Urna donec dolor bibendum lectus arcu purus eget nisl, ut nisl vitae.</p>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-6 mb-4' style={{ height: "200px" }}>
                            <div className="box">
                                <img className="box-img" src={ultimate} alt="Image 4" style={{ width: "60", height: "70", marginBottom: "21px" }} />
                                <div className="box-body">
                                    <h5 className="box-title">Best Author Awards 2018</h5>
                                    <p className="box-text">Morbi odio sodales et facilisis mi nibh fringilla quis risus ultricies facilisis.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr></hr>
                </div>
                <div class="Releasing p-100">
                    <div class="row top-row">
                        <div class="col-12 col-sm-6 top-text">
                            <span className='color date'>1986</span>
                            <h4>My First Book</h4>
                            <p>Quisque suspendisse fames eget risus quam posuere eu massa, consequat nec vestibulum fermentum velit nunc, dictum dui orci urna vitae.</p>
                        </div>
                    </div>
                    <div class="row top-row">
                        <div class="col-12 col-sm-6 top-text">
                            <span className='color date'>1992</span>
                            <h4>Released on Store</h4>
                            <p>Aliquam mattis lorem fermentum neque, quam arcu malesuada id quis est adipiscing in fringilla nulla ultricies.</p>
                        </div>
                    </div>
                    <div class="row top-row">
                        <div class="col-12 col-sm-6 top-text">
                            <span className='color date'>1998</span>
                            <h4>US Bestselling Book</h4>
                            <p>Ultrices ultrices sed ultrices suspendisse quisque in etiam adipiscing ligula rhoncus vivamus tincidunt amet sem cursus hendrerit nulla.</p>
                        </div>
                    </div>
                    <div class="row top-row">
                        <div class="col-12 col-sm-6 top-text">
                            <span className='color date'>1999</span>
                            <h4>My First Award</h4>
                            <p>Cras amet amet in egestas nibh vestibulum feugiat bibendum tempus ut ultricies risus aliquam vestibulum malesuada vitae sit.</p>
                        </div>
                    </div>
                    <div class="row top-row">
                        <div class="col-12 col-sm-6 top-text">
                            <span className='color date'>2006</span>
                            <h4>World's #1 Bestselling Author</h4>
                            <p>Curabitur malesuada turpis mauris mollis eget tincidunt lacus fusce purus dolor hac viverra viverra sagittis augue purus venenatis.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </>);
}

export default About;