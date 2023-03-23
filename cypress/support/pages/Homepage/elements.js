export const ELEMENTS = {
  HEADER: {
    SEARCH: {
      inputSearchBar: `#downshift-0-input`,
      inputSearchBarMobile: '#downshift-1-input',
      openinputSearchBarMobile: '.vtex-disclosure-layout-1-x-trigger',
    },

    MODAL_LOGIN: {
      EMAIL_PASSWORD: {
        inputEmail: 'div.vtex-login-2-x-inputContainerEmail input',
        inputPassword: 'div.vtex-login-2-x-inputContainerPassword input',
        btnEnter: 'div.vtex-login-2-x-sendButton button[type=submit]',
        msgInvalidLogin: '.vtex-login-2-x-formError',
        recoveryPassword:
          'div.vtex-login-2-x-emailAndPasswordForm a.vtex-login-2-x-forgotPasswordLink',
      },

      LOGGED_USER: {
        btnLogoff: 'div.vtex-login-2-x-accountOptions button.vtex-button',
      },

      RECOVERY_PASSWORD: {
        inputEmail: 'div.vtex-login-2-x-emailVerification input[name=email]',
        btnSend:
          'div.vtex-login-2-x-emailVerification div.vtex-login-2-x-formFooter div[class*=sendButton] button[type=submit]',
        inputNewPassword:
          'div.vtex-login-2-x-inputContainerPassword div.relative input[type=password]',
        inputConfirmNewPassword:
          'div.vtex-login-2-x-inputContainerPassword > label input[type=password]',
        btnCreate: 'div.vtex-login-2-x-sendButton button',
      },

      login: 'div.absolute div.vtex-login-2-x-box',
      btnLoginWithEmailPassword:
        'div.absolute div.vtex-login-2-x-box div.vtex-login-2-x-emailPasswordOptionBtn',
        btnLoginWithEmailPasswordmobile:
        ':nth-child(2) > .vtex-login-2-x-button > .vtex-button > .vtex-button__label',
    },

    btnLogin:
      //Elemento do CMS
      //'.vtex-login-2-x-container > div.relative > button.vtex-button .vtex-login-2-x-label',
      
      // Novo elemento IO
      'div.relative > .vtex-button > .vtex-button__label',
    btnLoginMobile:
      '.gray > .vtex-login-2-x-profileIcon',
    btnLoggedUser: 
    '.vtex-login-2-x-button > .t-action--small',
    
    //Elemento do CMS
    //'span.vtex-login-2-x-profile',

    //Novo elemento IO
    //'.vtex-login-2-x-sendButton > .vtex-button > .vtex-button__label',

    headerEluxCOLogo: '.vtex-flex-layout-0-x-flexCol--header-desktop-col1 > :nth-child(1) > .vtex-store-link-0-x-link', //`.vtex-store-link-0-x-link--logo`,
    headerEluxCOLogoMobile: '.vtex-store-link-0-x-link.vtex-store-link-0-x-link--logo',

  },

  PROMO_MODAL : {
    btnCloseModal: '.trackfield-store-components-0-x-cookies-disclaimer__button'
  },

 
  menuAboutElectroluxMobile: () => `//div[contains(text(),"Sobre Electrolux")]`,
  itemMenuAboutElectrolux: (aboutItem) => `//a[normalize-space()='${aboutItem}']`,
  
  menuAtendimentoElectroluxMobile: () => `//div[contains(text(),"Central de Atención")]`,
  menumobilenivel:
  
  //Novo elemento IO
  '.trackfield-drawer-0-x-drawerContent--menu-mobile--firstLevel > :nth-child(1)',

  //`.trackfield-drawer-0-x-opened > :nth-child(1) > :nth-child(2) > :nth-child(1) > .trackfield-drawer-0-x-drawerTriggerContainer`,
  
  itemMenuCentralAtencionElectrolux: (centralAtencionItem) => `//a[normalize-space()='${centralAtencionItem}']`,


  itemFooter: (itemFooterText) => `//a[normalize-space()='${itemFooterText}']`,
  menuCategories: ':nth-child(1) > .pv5 > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent',
  menuCategoriesMobile: '.trackfield-drawer-0-x-menuIcon',

  itemCategoryMenuMobile:() => 
  //Novo elemento IO 
  ':nth-child(5) > .trackfield-drawer-0-x-drawerTriggerContainer > .vtex-rich-text-0-x-container > .vtex-rich-text-0-x-wrapper > .lh-copy',

  itemCategoryMenu:() =>
  '.vtex-menu-2-x-menuItem--isOpen > .vtex-menu-2-x-submenuContainer > .vtex-menu-2-x-submenuWrapper > .vtex-menu-2-x-submenu > .vtex-menu-2-x-menuContainerNav--header-submenu > .vtex-menu-2-x-menuContainer--header-submenu > .vtex-flex-layout-0-x-flexRow--submenu-items--desktop > .vtex-flex-layout-0-x-flexRowContent--submenu-items--desktop > :nth-child(1) > .vtex-menu-2-x-menuItem--submenu-categoria-desktop > .vtex-flex-layout-0-x-flexRow > .mt0 > .items-stretch > .vtex-flex-layout-0-x-flexCol > .vtex-flex-layout-0-x-flexColChild > .vtex-menu-2-x-menuContainerNav > .vtex-menu-2-x-menuContainer > :nth-child(2) > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent',
  
  //Novo
  itemCategoryMenuDepto:() =>
  //Novo elemento IO
  '.trackfield-drawer-0-x-opened > .trackfield-drawer-0-x-drawerContent > .trackfield-drawer-0-x-childrenContainer > .vtex-tab-layout-0-x-container > .vtex-tab-layout-0-x-contentContainer > .vtex-tab-layout-0-x-contentItem > :nth-child(4) > .vtex-menu-2-x-menuItemInnerDiv > .vtex-menu-2-x-styledLinkContainer > .vtex-menu-2-x-styledLink > .vtex-menu-2-x-styledLinkContent',
  
  //(itemCategoryText, itemCategoryLink) =>
  // `//a[contains(@href,'${itemCategoryLink}')]//div[contains(text(),'${itemCategoryText}')]`,
  
  
  itemHeaderMenu: (itemCategoryText, itemCategoryLink) =>
    `//a[contains(@href,'${itemCategoryLink}')]//div[contains(text(),'${itemCategoryText}')]`,
}
