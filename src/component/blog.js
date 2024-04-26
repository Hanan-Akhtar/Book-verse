import React, { useState } from 'react';
import blog1 from '../images/blog-image-1.jpeg';
import blog2 from '../images/blog-2.jpeg'
import blog3 from '../images/blog-img-3.jpeg'

const Blog = () => {
    const [showFullText, setShowFullText] = useState(false);

    const toggleFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <>
            <div className="blog bg-light" style={{ padding: '50px' }}>
                <div className='container' style={{ marginTop: "0px" }}>
                    <div style={{ backgroundColor: "white", padding: "5.34em 2.67em" }} >
                        <img src={blog1} className='img-fluid blog1-img' alt='blog-1' />
                        <h1 className='entry-title'>Outing justo morbi wild</h1>
                        {showFullText ? (
                            <>
                                <p>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse.

                                    Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla nunc massa tellus mauris vitae lorem sit semper natoque fusce lectus urna.

                                    Pellentesque viverra
                                    Mauris viverra mi sollicitudin est nunc, tincidunt risus massa nunc proin ipsum fames aliquet vel etiam nulla pretium magna quam a porta vitae eget pellentesque nunc malesuada at nisi purus orci, fermentum consectetur iaculis eu morbi elit mauris in felis massa in vitae parturient purus magna aliquet phasellus odio in suscipit arcu amet, magna molestie in iaculis augue condimentum cras molestie vestibulum pharetra risus. <span className='color' onClick={toggleFullText} style={{ cursor: "pointer" }}>Show Less</span></p>
                            </>
                        ) : (
                            <>
                                <p>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse. Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla […] <span className='color' onClick={toggleFullText} style={{ cursor: "pointer" }}>Read more</span></p>
                            </>
                        )}
                    </div>
                </div>
                <hr className='bg-light'></hr>
                <div className='container' style={{ marginTop: "0px" }}>
                    <div style={{ backgroundColor: "white", padding: "5.34em 2.67em" }} >
                        <img src={blog2} className='img-fluid blog1-img' alt='blog-1' />
                        <h1 className='entry-title'>Eget elementum on train</h1>
                        {showFullText ? (
                            <>
                                <p>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse.

                                    Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla nunc massa tellus mauris vitae lorem sit semper natoque fusce lectus urna.

                                    Pellentesque viverra
                                    Mauris viverra mi sollicitudin est nunc, tincidunt risus massa nunc proin ipsum fames aliquet vel etiam nulla pretium magna quam a porta vitae eget pellentesque nunc malesuada at nisi purus orci, fermentum consectetur iaculis eu morbi elit mauris in felis massa in vitae parturient purus magna aliquet phasellus odio in suscipit arcu amet, magna molestie in iaculis augue condimentum cras molestie vestibulum pharetra risus.  <span className='color' onClick={toggleFullText} style={{ cursor: "pointer" }}>Show Less</span></p>
                            </>
                        ) : (
                            <>
                                <p>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse. Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla <span className='color' onClick={toggleFullText} style={{ cursor: "pointer" }}>Read more</span></p>
                            </>
                        )}
                    </div>
                </div>
                <hr className='bg-light'></hr>
                <div className='container' style={{ marginTop: "0px" }}>
                    <div style={{ backgroundColor: "white", padding: "5.34em 2.67em" }} >
                        <img src={blog3} className='img-fluid blog1-img' alt='blog-1' />
                        <h1 className='entry-title'>Visit sagittis malesuada vestibulum</h1>
                        {showFullText ? (
                            <>
                                <p>Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse.

                                    Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla nunc massa tellus mauris vitae lorem sit semper natoque fusce lectus urna.

                                    Pellentesque viverra
                                    Mauris viverra mi sollicitudin est nunc, tincidunt risus massa nunc proin ipsum fames aliquet vel etiam nulla pretium magna quam a porta vitae eget pellentesque nunc malesuada at nisi purus orci, fermentum consectetur iaculis eu morbi elit mauris in felis massa in vitae parturient purus magna aliquet phasellus odio in suscipit arcu amet, magna molestie in iaculis augue condimentum cras molestie vestibulum pharetra risus.<span className='color' onClick={toggleFullText} style={{ cursor: "pointer" }}>Show Less</span></p>
                            </>
                        ) : (
                            <>
                                <p> Aliquam sed in egestas gravida amet mattis sagittis, semper morbi vitae, egestas blandit duis facilisis adipiscing fermentum aenean nunc nibh accumsan, ornare enim at interdum mi arcu, ut magna ultrices odio dictumst aliquam tincidunt dictum pharetra vestibulum aliquam aliquet suspendisse. Sed et aliquam tincidunt ut sed porttitor nunc et etiam molestie arcu donec venenatis nulla<span className='color' onClick={toggleFullText} style={{ cursor: "pointer" }}>Read more</span></p>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blog;
