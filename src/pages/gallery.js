import { SRLWrapper } from "simple-react-lightbox";


const options = {
    buttons: {
      backgroundColor: 'rgba(30,30,36,0.8)',
      iconColor: 'rgba(255, 255, 255, 0.8)',
      iconPadding: '10px',
      showAutoplayButton: true,
      showCloseButton: true,
      showDownloadButton: false,
      showFullscreenButton: true,
      showNextButton: true,
      showPrevButton: true,
      showThumbnailsButton: false,
	  size: '40px'
	}
}

export default function Galery() {
    return (
        <div className="gallery-box">
		<div className="container-fluid">
			<div className="row">
				<div className="col-lg-12">
					<div className="heading-title text-center">
						<h2>Gallery</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
					</div>
				</div>
			</div>
        <SRLWrapper options={options}>
			<div className="tz-gallery">
				<div className="row">
					<div className="col-sm-12 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-01.jpg">
							<img className="img-fluid" src="images/gallery-img-01.jpg" alt="Gallery Images"/>
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-02.jpg">
							<img className="img-fluid" src="images/gallery-img-02.jpg" alt="Gallery Images"/>
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-03.jpg">
							<img className="img-fluid" src="images/gallery-img-03.jpg" alt="Gallery Images"/>
						</a>
					</div>
					<div className="col-sm-12 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-04.jpg">
							<img className="img-fluid" src="images/gallery-img-04.jpg" alt="Gallery Images"/>
						</a>
					</div>
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-05.jpg">
							<img className="img-fluid" src="images/gallery-img-05.jpg" alt="Gallery Images"/>
						</a>
					</div> 
					<div className="col-sm-6 col-md-4 col-lg-4">
						<a className="lightbox" href="images/gallery-img-06.jpg">
							<img className="img-fluid" src="images/gallery-img-06.jpg" alt="Gallery Images"/>
						</a>
					</div>
				</div>
			</div>
          </SRLWrapper>
		</div>
	</div>
    )
}