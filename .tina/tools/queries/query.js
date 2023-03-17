//#region global
export const getHeader = `
getGlobalDocument(relativePath: "index.json") {
  id
  data {
    header {
      nav {
        href
        label
        children {
          href
          icon
          label
          blurb
        }
      }
    }
  }
}
`;
export const getFooter = `
getGlobalDocument(relativePath:"index.json"){
  id
  data{
    footer {
      services {
        title
        link
      }
      pages {
        title
        link
      }
      legal {
          title{
            ...on LegalDocument{
            sys{
              filename
            }
            data{
              legalDocumentTitle
            }
          }
          }
        }
    } 
  }
}
`;
export const getReviewsList = `
  getGlobalDocument(relativePath: "index.json") {
    data {
      reviews {
        sliderSpeed
        reviewsList {
          title
          profile
          review
          link
          date
        }
      }
     
    }
  }
`;
export const getContactInfo = `
getGlobalDocument(relativePath:"index.json"){
  id
  data{
    contactInfo {
      businessName
      phoneNumber
      email
      hours
      facebookUrl
      googleMapsUrl
      linkedInUrl
      youTubeUrl
      instagramUrl
      bbbUrl
    }
  }
}
`;
export const getGlobalDocument = `
getGlobalDocument(relativePath:"index.json"){
  id
  data {
    header {
      nav {
        href
        label
        children {
          href
          label
          blurb
          icon
        }
      }
    }
    reviews {
      sliderSpeed
      reviewsList {
        title
        profile
        review
        link
        date
      }
    }
    contactInfo {
      businessName
      phoneNumber
      email
      hours
      facebookUrl
      googleMapsUrl
      linkedInUrl
      youTubeUrl
      instagramUrl
      bbbUrl
    }
    footer {
      services {
        title
        link
      }
      pages {
        title
        link
      }
      legal {
          title{
            ...on LegalDocument{
            sys{
              filename
            }
            data{
              legalDocumentTitle
            }
          }
          }
        }
    }
  }
}
`;
//#endregion global

//#region pages
export const getHomePage = `
    getHomeDocument(relativePath: "index.md") {
    data {
      hero {
        subHeadline
        headline
        mobileBackgroundSrc
        hook
        videoButtonToggle
        videoButtonText
        videoButtonLink
        ctaButtonToggle
        ctaButtonText
        ctaButtonLink
      }
      serviceSlider {
        categoryList {
          title
          headline
          body
          toggleServices
          services{
            title{
              ...on ServiceDocument{
                sys{
                  filename
                }
                data{
                  serviceName
                  icon
									hero{
										icon
									}
                }
              }
            }  
          }
          ctaButtonText
          ctaButtonLink
          beforeImage
          afterImage
        }
      }
      planSlider {
        categoryList {
          title
          headline
          icon
          body
          ctaButtonText
          ctaButtonLink
          featuredImage
        }
      }
      preFooterCTA {
        subHeadline
        headline
        ctaButtonText
        ctaButtonLink
      }
      seo {
        title
        description
        image
        noFollow
        noIndex
      }
    }
  }
`;

export const getAboutPage = `
getAboutDocument(relativePath: "index.md"){
  data {
    hero {
      icon
      pageTitle
      headline
      hook
      ctaButtonToggle
      ctaButtonText
      ctaButtonLink
      videoButtonToggle
      videoButtonText
      videoButtonLink
    }
    featuredSection {
      subHeadline
      headline
      body
      image
      ctaButtonToggle
      ctaButtonText
      ctaButtonLink
    }
    featuredGrid {
      maxColumns
      features {
        title
        iconToggle
        icon
        headline
        body
      }
    }
    longText {
      subHeadline
      headline
      bodyRows{
        bodyColumns{
          body
        }
      }
      ctaButtonToggle
      ctaButtonText
      ctaButtonLink
      ctaButtonToggle2
      ctaButtonText2
      ctaButtonLink2
    }
    seo {
        title
        description
        image
        noFollow
        noIndex
      }
  }
}
`;

export const getContactPage = `
getContactDocument(relativePath: "index.md") {
  data {
    hero {
      icon
      pageTitle
      headline
      hook
      ctaButtonToggle
      ctaButtonText
      ctaButtonLink
      videoButtonToggle
      videoButtonText
      videoButtonLink
    }
    serviceAreas 
    seo {
        title
        description
        image
        noFollow
        noIndex
      }
  }
}
`;
export const getProjectsPage = `
  getProjectsDocument(relativePath: "index.md") {
    data {
      hero {
        icon
        pageTitle
        headline
        hook
        ctaButtonToggle
        ctaButtonText
        ctaButtonLink
        videoButtonToggle
        videoButtonText
        videoButtonLink
      }
      seo {
        title
        description
        image
        noFollow
        noIndex
      }
    }
  }
`;
//#endregion pages

//#region post queries
export const getProjectFileNames = `
  getProjectList {
    edges{
      node{
        sys{
          filename
        }
      }
    }
  }
`;

export const getProjectDynamicDocument = `
  getProjectDocument(relativePath: $relativePath) {
    data {
 	  title
 	  date
 	  featuredImage
 	  beforeAfterToggle
 	  beforeImage
 	  afterImage
 	  projectDescription
 	  morePhotos {
 	    title
 	  }
 	  deactivate
 	}    
  }
`;
export const getProjectsList = `
 getProjectList {
    totalCount
    edges {
      node{
        data {
          title
          date
          featuredImage
          beforeImage
          afterImage
          deactivate
          projectDescription
        } 
        sys{
          filename
        }
      }
    }
  }
`;
export const getServiceList = `
  getServiceList {
    edges{
      node{
				sys{
					filename
				}
        data {
          serviceName
          icon
        }
      }
    }
  }
`;
export const getLegalList = `
  getLegalList {
    totalCount
    edges {
      cursor
      node{
        sys{
          filename
        }
        data{
          legalDocumentTitle
          body
        }
      }
    }
  }
`;
export const getLegalDynamicDocument = `
  getLegalDocument(relativePath: $relativePath) {
    data {
      legalDocumentTitle
      body
    }
  }
`;
export const getServiceDynamicDocument = `
  getServiceDocument(relativePath: $relativePath) {
    data {
      serviceName
      icon
			hero {
        icon
        backgroundImageSrc
        pageTitle
        headline
        hook
        ctaButtonToggle
        ctaButtonText
        ctaButtonLink
        videoButtonToggle
        videoButtonText
        videoButtonLink
      }
      featuredGrid {
        maxColumns
        features {
          title
          iconToggle
          icon
          headline
          body
        }
      }
      longText {
        subHeadline
        headline
        bodyRows{
          bodyColumns{
            body
          }
        }
        ctaButtonToggle
        ctaButtonText
        ctaButtonLink
        ctaButtonToggle2
        ctaButtonText2
        ctaButtonLink2
      }
      seo {
          title
          description
          image
          noFollow
          noIndex
        }
    }
  }
`;
//#endregion post queries
const Query = {
  getHeader,
  getFooter,
  getReviewsList,
  getHomePage,
  getAboutPage,
  getContactPage,
  getContactInfo,
  getGlobalDocument,
  getProjectFileNames,
  getProjectDynamicDocument,
  getProjectsList,
  getProjectsPage,
  getServiceList,
  getLegalList,
  getLegalDynamicDocument,
  getServiceDynamicDocument,
};

export default Query;
