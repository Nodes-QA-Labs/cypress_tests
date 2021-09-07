import { assertPageLoads } from "../support/functions";

describe ('key pages accessibility', function () {

    it ('verifies that main HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.MainHP)
        assertPageLoad()
        })
    })

    it ('verifies that UCL HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.uclHP)
        assertPageLoads()
        })
    })
    
    it ('verifies that UEL HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.uelHP)
        assertPageLoads()
        })
    })

    it ('verifies that UECL HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.ueclHP)
        assertPageLoads()
        })
    })

    it ('verifies that WUCL HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.wuclHP)
        assertPageLoads()
        })
    })

    it ('verifies that EQ HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.eqHP)
        assertPageLoads()
        })
    })

    it ('verifies that Super Cup HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.superCupHP)
        assertPageLoads()
      })
    })

    it ('verifies that Youth League HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.youthHP)
        assertPageLoads()
        })
    })
})