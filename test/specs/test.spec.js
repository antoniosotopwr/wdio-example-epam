describe("Test suite", () => {
    it("First test", async () =>{
        await browser.url("https://www.reddit.com/")
        const pageTitle = await browser.getTitle();
        console.log(pageTitle);

        expect(pageTitle).toEqual("Reddit - Explora lo que gustes");
    })
})