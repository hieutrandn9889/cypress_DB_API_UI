var index = 1;
export default class BasePage {
  // verifyElements() {
  //   return cy.get(this.mainPageUI.bodyUI).should('be.visible').then(() => {
  //     return this.navMenu.verifyElements();
  //   });
  // }

  // visit
  static enterUrl(url) {
    cy.visit(url)
  }

   // log
   static logUrl(url) {
    cy.log(url)
  }

  // clickGetElements
  static clickGetElements(elementFinder) {
    cy.get(elementFinder)
      .should('be.visible')
      .click({ force: true })
  }

  static clickElements(elementFinder) {
    cy.xpath(elementFinder)
      .should('be.visible')
      .click({ force: true })
  }
  static clickElementsMultiple(elementFinder) {
    cy.xpath(elementFinder)
      .should('be.visible')
    click({ multiple: true })
  }

  //invoke
  static invokeXpathElements(ele1, ele2) {
    cy.xpath(ele1)
    .invoke('show')
    cy.xpath(ele2).click({ force: true })
    
  }

  static typeValueNotElements(value) {
    cy.type(value);
  }
  static typeElements(elementFinder, value) {
    cy.xpath(elementFinder)
      .should('be.visible')
      .type(value);
  }

  static typeGetElements(elementFinder, value) {
    cy.get(elementFinder)
      .should('be.visible')
      .type(value);
  }

  static typeElementsEnter(elementFinder, value) {
    cy.xpath(elementFinder)
      .should('be.visible')
      .type(`${value}{enter}`);
  }

  static typeGetElementsEnter(elementFinder, value) {
    cy.get(elementFinder)
      .should('be.visible')
      .type(`${value}{enter}`);
  }

  static clearElements(elementFinder) {
    cy.xpath(elementFinder)
      .should('be.visible')
      .clear();
    console.log("test1")
  }

  static clearGetElements(elementFinder) {
    cy.get(elementFinder)
      .should('be.visible')
      .clear();
  }

  static typeSpaceElements(elementFinder) {
    cy.xpath(elementFinder)
      .should('be.visible')
      .type('  ');
  }

  static typeIncreaseGmailElements(elementFinder, value) {
    ++index;
    cy.xpath(elementFinder).type(`${value}+${index}@enouvo.com`);
  }

  static typeIncreaseDomainElements(elementFinder, value) {
    ++index;
    cy.xpath(elementFinder).type(`${value}${index}`);
  }


  static typeRandomGmailElements(elementFinder, value) {
    cy.xpath(elementFinder).type(`${value}+${this.randomStringNumber(3)}@enouvo.com`);
  }

  static typeRandomUsernameElements(elementFinder, value) {
    cy.xpath(elementFinder).type(value + this.randomStringNumber(3));
  }

  static drapAndDrop(elementFinder1, elementFinder2) {
    cy.xpath(elementFinder1)
      .first()
      .trigger('dragstart');
    cy.xpath(elementFinder2).trigger('drop');
  }

  static uploadFilePdfDifferentInputBtn(elementFinder) {
    cy.fixture('2.pdf').then(fileContent => {
      cy.get(elementFinder).upload(
        {
          fileContent,
          fileName: '2.pdf',
          mimeType: 'otherFile/pdf',
        },
        { subjectType: 'drag-n-drop' }
      );
    });
  }

  static uploadFileImageDifferentInputBtn(elementFinder) {
    cy.fixture('1.jpg').then(fileContent => {
      cy.get(elementFinder).upload(
        {
          fileContent,
          fileName: '1.jpg',
          mimeType: 'image/jpg',
        },
        { subjectType: 'drag-n-drop' }
      );
    });
  }

  static uploadFileInputBtn(elementFinder) {
    cy.fixture('1.jpg').then(fileContent => {
      cy.get(elementFinder).upload(
        {
          fileContent,
          fileName: '1.jpg',
          mimeType: 'image/jpg',
        },
        { uploadType: 'input' }
      );
    });
  }

  static randomStringNumber(length) {
    let result = '';
    const characters = '0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  static verifyGetElements(elementFinder) {
    return cy.get(elementFinder).should('be.visible');
  }

  static verifyElements(elementFinder) {
    return cy.xpath(elementFinder).should('be.visible');
  }

  static verifyNotElements(elementFinder) {
    return cy.xpath(elementFinder).should('not.be.visible');
  }

  static verifyNotGetElements(elementFinder) {
    return cy.get(elementFinder).should('not.be.visible');
  }

  static verifyUncheckElements(elementFinder) {
    return cy
      .xpath(elementFinder)
      .should('be.visible')
      .uncheck();
  }

  static verifyElementsLenght(elementFinder, value) {
    return cy.xpath(elementFinder).should('have.lenght', value);
  }

  static verifyElementsLenght(elementFinder, value) {
    return cy.xpath(elementFinder).should('have.lenght', value);
  }

  static scrollHeader() {
    return cy
      .get('header')
      .should('be.visible')
      .scrollIntoView({ duration: 2000 });
  }

  static hoverButton(elementFinder) {
    cy.xpath(elementFinder).trigger('mouseover', { force: true });
  }

  static hoverGetButton(elementFinder) {
    return cy.get(elementFinder).trigger('mouseover', { force: true });
  }

  static hoverImageCssDisplayIsNone(elementFinder) {
    return cy
      .xpath(elementFinder)
      .invoke('show')
      .click({ force: true });
  }

  static verifyXpathValueElement(elementFinder, value) {
    cy.xpath(elementFinder).should('have.value', value);
  }

  static verifyGetValueElement(elementFinder, value) {
    cy.get(elementFinder).should('have.value', value);
  }

  static verifyGetNotValueElement(elementFinder, value) {
    cy.get(elementFinder).should('have.not.value', value);
  }

  static verifyXpathClassElement(elementFinder, value) {
    cy.xpath(elementFinder).should('have.class', value);
  }

  static verifyGetClassElement(elementFinder, value) {
    cy.get(elementFinder).should('have.class', value);
  }

  static verifyGetTextElement(elementFinder, value) {
    cy.get(elementFinder).should('have.text', value);
  }

  static verifyXpathTextElement(elementFinder, value) {
    cy.xpath(elementFinder).should('have.text', value);
  }

  static verifyGetContainsElement(elementFinder, value) {
    cy.get(elementFinder).contains(value)
  }

  static verifyXpathContainsElement(elementFinder, value) {
    cy.xpath(elementFinder).contains(value)
  }

  static verifyXpathVisibleElement(elementFinder, time) {
    cy.xpath(elementFinder, { timeout: time }).should('be.visible');
  }

  static verifyIncludeUrl(url) {
    cy.url().should('include', url);
  }

  static verifyEqualUrl(url) {
    cy.url().should('eq', url);
  }

  //click button in alert
  static clickBtnInAlert(el) {
    cy.on('window:alert', () => {
      cy.xpath(el).click()
    })
  }

  // alert contain
  static verifyAlertContain(value) {
    cy.on('window:alert', (str) => {
      expect(str).to.contain(value)
    })
  }

  // alert not contain
  static verifyAlertNotContain(value) {
    cy.on('window:alert', (str) => {
      expect(str).not.to.contain(value)
    })
  }

  static wait(time) {
    cy.wait(time);
  }

  static reloadPage() {
    cy.reload();
    cy.wait(5000);
  }

  // waiting an element
  static waitToElement(elem, time) {
    cy.get(elem,{ timeout: time}).should('be.visible');;
  }

  static getTitleElement(elementFinder) {
    return new Promise((resolve, reject) =>
      cy.get(elementFinder).then($elem => {
        // console.log($elem.attr('title'), 'dddd');
        resolve($elem.attr('title'));
      })
    );
  }

  // scroll bottom
  static scrollToBottom() {
    cy.scrollTo('bottom')
  }

  // scroll element
  static scrollToElement(elem, position) {
    cy.get(elem).scrollTo(position);
  }

  // select element
  static selectToElement(elem, value) {
    cy.xpath(elem).select(value).should('have.value', value);
  }

  // select test in table
  static selectElementValue(elem, value) {
    cy.xpath(elem).select(value)
  }

  // get href and go
  static getXpathAttributHref(elem) {
    cy.xpath(elem).then(function ($a) {
      const href = $a.prop('href')
      cy.visit(href)
      cy.wait(1000)
    })
  }
  // contains
  static containsElement( value) {
    cy.contains('p', value)
  }
  

}
