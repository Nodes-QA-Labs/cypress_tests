import { assertPageLoads } from "../support/functions";
import { getReadyForScreen } from "../support/functions";

describe ('key pages accessibility', function () {

    it ('verifies that main HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.MainHP)
        assertPageLoads()
        cy.percySnapshot('Main_HP')
        })
    })

    it ('verifies that UCL HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.uclHP)
        assertPageLoads()
        getReadyForScreen()
        cy.percySnapshot('UCL_HP')
        })
    })
    
    it ('verifies that UEL HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.uelHP)
        assertPageLoads()
        getReadyForScreen()
        cy.percySnapshot('UEL_HP')
        })
    })

    it ('verifies that UECL HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.ueclHP)
        assertPageLoads()
        getReadyForScreen()
        cy.percySnapshot('UECL_HP')
        })
    })

    it ('verifies that WUCL HP is loaded', function () {
        cy.fixture('baseUrl').then(function (baseUrl) {
            this.baseUrl = baseUrl

        cy.visit(this.baseUrl.wuclHP)
        assertPageLoads()
        getReadyForScreen()
        cy.percySnapshot('WUCL_HP')
        })
    })
})