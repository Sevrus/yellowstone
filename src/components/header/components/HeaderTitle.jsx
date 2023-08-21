import star from '../../../assets/images/star.png'

const HeaderTitle = () => {

    const alternativeText = 'Une étoile blanche';

  return(
      <div className="header-title">
          <img src={star} alt={alternativeText} />
          <h1>yellowstone</h1>
          <img src={star} alt={alternativeText} />
      </div>
  );
};

export default HeaderTitle;