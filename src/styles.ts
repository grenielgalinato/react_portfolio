export const style = {
  heading: {
    heading1: {
      fontSize: '48px',
      fontWeight: '700',
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
    },
    subHeading2: {
      margin: '5px 0 -12px',
      fontSize: '24px',
      fontFamily: 'Pacifico, cursive',
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
    boxContentLeftHead: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5px',
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
    },
    boxContentLeftBottom: {
      display: 'flex',
      gap: '20px',
      width: '100%',
      alignSelf: 'flex-end',
    },
    boxContentRight: {
      position: 'relative',
      width: '600px',
      flexGrow: 1,
      top: '25px',
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
    current: {
      color: "#72A0C1"
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
      margin: '10px 0'
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
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#ffffff'
      }
    },
    tabsPanel: {
      marginTop: '1px',
      background: 'rgba(255, 255, 255, 0.07)'
    }
  }
};
