import React from 'react';

const Weadingloaction = () => {
    return ( <section className="section w-details-area center-text">
		<div className="container">
			<div className="row">
				<div className="col-sm-1"></div>
				<div className="col-sm-10">
					
					<div className="heading">
						<h2 className="title">Wedding & Reception Details</h2>
						<span className="heading-bottom"><i className="icon icon-star"></i></span>
					</div>
					
					<div className="wedding-details margin-bottom">
						
						<div className="w-detail right">
							<i className="icon icon-ciurclke"></i>
							<h4 className="title">WEDDING CEREMONY</h4>
                            <p>Sunday, February 4th, 2024</p>
							<p>Inder Kamal Garden</p>
                            <p><i className="icon icon-email-plane"></i></p>
                            <p>Near Kailash Farm Street, Agra Road Aligarh</p>
                            <p>
							<div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3527.6041847969227!2d78.0763166!3d27.852704999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a3484898fd11%3A0x314284166350835e!2sIndra%20kamal%20Garden!5e0!3m2!1sen!2sin!4v1706078257122!5m2!1sen!2sins" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                            </div>
							</p>

						</div> 
						
						<div className="w-detail right">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">DINNER</h4>
							<p>Time: 7PM Onwards</p>
						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-cake"></i>
							<h4 className="title">RECEPTION PARTY & MAHILA SANGEET</h4>
							<p>Friday, Wednesday 7th, 2024</p>
							<p>Mangal Bhawan</p>
                            <p><i className="icon icon-email-plane"></i></p>
                            <p>Agra Road, Hathras</p>
                            <p>
							<div className="map-responsive">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.3740188948373!2d78.04872877378783!3d27.581931631014857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397484c45a538f71%3A0x56efb1aa44af761!2sMangal%20Bhavan!5e0!3m2!1sen!2sin!4v1706078805074!5m2!1sen!2sin" width="600" height="450" frameBorder="0" style={{border:0}} allowFullScreen=""></iframe>
                                </div>
								</p>
						</div> 
						
						<div className="w-detail left">
							<i className="icon icon-wine-glass"></i>
							<h4 className="title">DINNER</h4>
							<p>Time: 7PM Onwards</p>
						</div> 
						
					</div>
					
				</div>
			</div>
		</div>
    </section>    
    );
}

export default Weadingloaction;