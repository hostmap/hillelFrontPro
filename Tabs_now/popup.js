document.getElementById("saveButton").addEventListener("click", function () {
  if (chrome.tabs && chrome.downloads) {
    chrome.tabs.query({}, function (tabs) {
      let tabInfo = [];
      let processedTabs = 0;

      function processTab(tab) {
        chrome.tabs.captureVisibleTab(
          tab.windowId,
          { format: "png" },
          function (screenshotUrl) {
            if (chrome.runtime.lastError) {
              console.error(chrome.runtime.lastError);
              tabInfo.push({
                url: tab.url,
                date: new Date().toLocaleString(),
                screenshot: "Ошибка",
              });
              processNextTab();
              return;
            }
            if (screenshotUrl) {
              let filename = `screenshot_tab_${tab.id}.png`;
              chrome.downloads.download(
                { url: screenshotUrl, filename: filename },
                function () {
                  tabInfo.push({
                    url: tab.url,
                    date: new Date().toLocaleString(),
                    screenshot: filename,
                  });
                  processNextTab();
                }
              );
            } else {
              tabInfo.push({
                url: tab.url,
                date: new Date().toLocaleString(),
                screenshot: "Недоступно",
              });
              processNextTab();
            }
          }
        );
      }

      function processNextTab() {
        processedTabs++;
        if (processedTabs === tabs.length) {
          saveTabInfoToFile(tabInfo);
        } else {
          processTab(tabs[processedTabs]);
        }
      }

      function saveTabInfoToFile(tabInfo) {
        let text = tabInfo
          .map((item) => `${item.url} - ${item.date} - ${item.screenshot}`)
          .join("\n");
        let blob = new Blob([text], { type: "text/plain" });
        let url = URL.createObjectURL(blob);
        chrome.downloads.download({ url: url, filename: "tab_info.txt" });
      }

      if (tabs.length > 0) {
        processTab(tabs[0]);
      }
    });
  } else {
    console.error("chrome.tabs or chrome.downloads is not available.");
  }
});
