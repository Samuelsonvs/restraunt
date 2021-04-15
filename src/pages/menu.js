const menuContent = [
	{
		"src": "images/img-01.jpg",
		"h4": "Special Drinks 1",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$7.79",
	},
	{
		"src": "images/img-02.jpg",
		"h4": "Special Drinks 2",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$9.89",
	},
	{
		"src": "images/img-03.jpg",
		"h4": "Special Drinks 3",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$11.75",
	},
	{
		"src": "images/img-04.jpg",
		"h4": "Special Lunch 1",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$10.62",
	},
	{
		"src": "images/img-05.jpg",
		"h4": "Special Lunch 2",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$17.89",
	},
	{
		"src": "images/img-06.jpg",
		"h4": "Special Lunch 3",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$8.21",
	},
	{
		"src": "images/img-07.jpg",
		"h4": "Special Dinner 1",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$5.90",
	},
	{
		"src": "images/img-08.jpg",
		"h4": "Special Dinner 2",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$15.74",
	},
	{
		"src": "images/img-09.jpg",
		"h4": "Special Dinner 3",
		"p": "Sed id magna vitae eros sagittis euismod.",
		"h5": "$19.56",
	},
];


export default function Menu() {
    return (
        <div className="menu-box">
		<div className="container">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Special Menu</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>

			<div className="row special-list">
				{menuContent.map((menu, index) =>(
					<div key={index} className="col-lg-4 col-md-6 special-grid drinks">
						<div className="gallery-single fix">
							<img src={menu.src} className="img-fluid" alt="Imager"/>
							<div className="why-text">
								<h4>{menu.h4}</h4>
								<p>{menu.p}</p>
								<h5>{menu.h5}</h5>
							</div>
						</div>
					</div>
				))}
				
			</div>
		</div>
	</div>
    )
}