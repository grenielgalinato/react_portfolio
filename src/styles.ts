export const style = {
  heading: {
    heading1: {
      fontSize: '48px',
      fontWeight: '700',
      '@media screen and (max-width: 768px)': {
        fontSize: '34px'
      }
    },
    heading2: {
      fontSize: '22px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      letterSpacing: '3px',
    },
    heading3: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      marginBottom: '10px',
      letterSpacing: '3px',
    },
    subHeading1: {
      fontSize: '26px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      '@media screen and (max-width: 768px)': {
        fontSize: '20px'
      }
    },
    subHeading2: {
      margin: '5px 0 -12px',
      fontSize: '30px',
      fontFamily: 'Dancing Script, cursive',
      fontWeight: 400,
      color: 'rgba(255, 255, 255, 0.7',
    }
  },
  box: {
    boxText: {
      padding: '20px',
    },
    boxTab: {
      padding: '0'
    },
    boxHeading: {
      marginBottom: '20px',
      p: '5px 10px',
    },
    boxMain: {
      display: 'flex',
      '@media screen and (max-width: 768px)': {
          flexDirection: 'column',
          padding: '0 20px'
        }
    },
    boxContentLeftHead: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
      '@media screen and (max-width: 768px)': {
        alignItems: 'center',
        textAlign: 'center'
      }
    },
    boxContentLeft: {
      position: 'sticky',
      width: '600px',
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'column',
      height: '75vh',
      overflowY: 'auto',
      top: '100px',
      '@media screen and (max-width: 768px)': {
        position: 'unset',
        width: '100%',
        height: 'auto',
        margin: '40px 0'
      }
    },
    boxContentLeftBottom: {
      display: 'flex',
      gap: '20px',
      width: '100%',
      alignSelf: 'flex-end',
      '@media screen and (max-width: 768px)': {
        justifyContent: 'center'
      }
    },
    boxContentRight: {
      position: 'relative',
      width: '600px',
      flexGrow: 1,
      top: '25px',
      '@media screen and (max-width: 768px)': {
        width: '100%'
      }
    },
    boxContentRightContainer: {
      marginBottom: '60px',
      paddingTop: '50px',
      scrollMarginTop: '50px',
      scrollPaddingTop: '0',
      scrollSnapAlign: 'start'
    },
    boxAvatar: {
      width: '40px',
      height: '40px',
      borderRadius: 'none',
      ObjectFit: 'none',
    },
    boxSideNav: {
      '@media screen and (max-width: 768px)': {
        display: "none",
        position: 'fixed',
        left: '10px',
        bottom: '10px',
        zIndex: '9999'
      }      
    },
    boxIcons: {
      '@media screen and (max-width: 768px)': {
        marginTop: '50px',
        textAlign: 'center'
      }
    }
  },
  text: {
    normal: {
      marginBottom: '20px',
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.7',
    },
    simple: {
      fontSize: '16px',
      fontWeight: '400',
      lineHeight: '1.7',
    },
    simpleBold: {
      fontSize: '16px',
      fontWeight: '700',
      lineHeight: '1.7',
    },
    small: {
      marginBottom: '15px',
      fontSize: '14x',
      fontWeight: '300',
      lineHeight: '1.7',
      color: "rgba(255, 255, 255, 0.7)"
    },
    current: {
      color: "#72A0C1"
    }
  },
  link: {
    linkText: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'right',
      margin: '20px 0 0',
      fontSize: '16px',
      color: 'rgba(255, 255, 255, 0.7)',
      transition: 'transition: all 0.1s ease',
      _hover: {
        color: '#ffffff'  
      }
    }, 
    linkIcon: {
      width: '10px',
      height: '10px',
      marginLeft: '10px',
    }
  },
  pill: {
    container: {
      padding: '20px',
    },
    box: {
      marginBottom: '20px',
      _hover: { filter: 'brightness(130%)' },
      transition: 'all 0.1s ease',
    },
    title: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '20px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      marginBottom: '10px',
      letterSpacing: '3px',
    },
    titleBox: {
      marginRight: '10px',
      marginBottom: '4px',
      width: '10px',
      height: '10px',
    },
    textBox: {
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap',
    },
    text: {
      fontSize: '16px',
      fontWeight: '400',
      display: 'inline',
      p: '5px 10px',
    },
  },
  exp: {
    container: {
      display: 'flex',
      gap: '10px',
      p: '20px',
      marginBottom: '20px',
      transition: 'all 0.1s ease',
      _hover: {
        bg: 'rgba(255, 255, 255, 0.07)',
        transition: 'all 0.1s ease',
      },
    },
    container2: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      p: '20px',
      marginBottom: '20px',
      transition: 'all 0.1s ease',
      _hover: {
        bg: 'rgba(255, 255, 255, 0.07)',
        transition: 'all 0.1s ease',
      },
    },
    expLeft: {
      width: '25%',
    },
    expRight: {
      width: '75%',
    },
    expTenure: {
      fontSize: '14px',
      fontWeight: '300',
      margin: '0',
    },
    expBoxHeading: {
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      marginBottom: '20px',
    },
    expHeading: {
      fontSize: '20px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      margin: '0',
      lineHeight: '1',
    },
    expSubHeading: {
      fontSize: '14px',
      fontWeight: '600',
      fontFamily: 'Scope One, serif',
      margin: '0',
      lineHeight: '1',
    },
    expDesc: {
      fontSize: '16px',
      fontWeight: '400',
    },
    expIcon: {
      width: '12px',
      height: '12px',
      fontWeight: 'bold',
      marginRight: '5px',
    },
  },
  accordion: {
    heading: {
      fontSize: '16px',
      fontWeight: '600',
    },
    subHeading: {
      fontSize: '14px',
      fontWeight: '500',
      fontFamily: 'Scope One, serif',
    },
    accordionBox: {
      border: '1px solid rgba(255, 255, 255, 0.1)',
      marginBottom: '10px',
    },
    accordionContentBox: {
      flex: '1',
      textAlign: 'left',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
    },
    accordionContentInnerBox: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  },
  list: {
    listItem: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
      margin: '10px 0', 
      '@media screen and (max-width: 768px)': {
        margin: '5px 0', 
        paddingLeft: '15px'
      }
    }
  },
  tabs: {
    tabsList: {
      padding: 0,
      border: 'none',
      margin: 0,
    },
    tab: {
      border: 'none',
      borderRadius: '0',
      background: 'transparent',
      '&[aria-selected=true]': {
        background: 'rgba(255, 255, 255, 0.07)',
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#ffffff'
      },
      '@media screen and (max-width: 768px)': {
        fontSize: '11px',
        '&[aria-selected=true]': {
          fontSize: '12px',
          fontWeight: 'bold',
          color: '#003036'
        },
      }
    },
    tabsPanel: {
      marginTop: '1px',
      background: 'rgba(255, 255, 255, 0.07)'
    },
    tabPanel: {
      padding: '20px',
    },
    tabBox: {
      padding: '20px 0'
    },
    tabHeading: {
      fontSize: '18px',
      fontWeight: '700',
      marginBottom: '20px',
      textAlign: 'center'
    }
  },
  image: {
    imageBox: {
      width: 'auto',
      maxWidth: '190px',
      height: 'auto',
      background: 'rgba(255, 255, 255, 0.07)',
      '@media screen and (max-width: 768px)': {
        maxWidth: '100%',
        background: '#00303653',
      }
    },
    imageSiteBox: {
      width: 'auto',
      maxWidth: '280px',
      height: 'auto',
      background: 'rgba(255, 255, 255, 0.07)',
      padding: '10px',
      margin: '0',
      '@media screen and (max-width: 768px)': {
        maxWidth: '100%',
        background: '#00303653',
      }
    }, 
    imageDetails: {
      marginTop: '10px',
      padding: '10px 10px',
      background: 'rgba(255, 255, 255, 0.1)',
      minHeight: '120px'
    },
    heading: {
      fontSize: '14px',
      fontWeight: '600',
      marginBottom: '12px'
    },
    subHeading: {
      fontSize: '12px',
      fontWeight: '500',
      fontFamily: 'Scope One, serif',
    },
  },
  footnote: {
    details: {
      padding: '20px',
      background: 'rgba(255, 255, 255, 0.07)',
    },
    copyright: {
      padding: '20px 20px',
      background: 'rgba(255, 255, 255, 0.1)',      
    },
    textSmall: {
      fontSize: '10x',
      fontWeight: '200',
      lineHeight: '1',
      color: "rgba(255, 255, 255, 0.7)",
      textAlign: 'center'
    }
  },
  pageDesign: {
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '85vh'
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      maxWidth: '400px',
      height: 'auto',
      textAlign: 'center'
    },
    heading: {
      marginTop: '20px',
      fontSize: '24px',
      fontWeight: '700',
      textAlign: 'center'
    },
    subHeading: {
      marginTop: '20px',
      fontSize: '18px',
      fontWeight: '400',
      textAlign: 'center'
    },
    link: {
      marginTop: '20px',
      textDecoration: 'underline',
      opacity: '0.7'
    },
    image: {
      width: '60%'
    }
  }
};
