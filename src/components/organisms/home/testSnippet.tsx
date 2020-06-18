import React from "react"
import darkTheme from "prism-react-renderer/themes/dracula"
import { LiveProvider, LiveEditor } from "react-live"
import { Box } from "@chakra-ui/core"

export const liveEditorStyle = {
  fontSize: 14,
  fontFamily: "Fira Code, monospace",
  overflow: "auto",
  borderRadius: 2,
  maxHeight: 300,
}

const TestSnippet = () => {
  return (
    <>
      <LiveProvider disabled theme={darkTheme} className="language-python">
        <Box position="relative">
          <Box mb="-16px" ml={2} position="relative" zIndex="10">
            <svg
              width="52"
              height="12"
              viewBox="0 0 52 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.75 6C11.75 9.17564 9.17564 11.75 6 11.75C2.82436 11.75 0.25 9.17564 0.25 6C0.25 2.82436 2.82436 0.25 6 0.25C9.17564 0.25 11.75 2.82436 11.75 6Z"
                stroke="#CE5347"
                fill="#ED6A5E"
                stroke-width="0.5"
              />
              <path
                d="M31.75 6C31.75 9.17564 29.1756 11.75 26 11.75C22.8244 11.75 20.25 9.17564 20.25 6C20.25 2.82436 22.8244 0.25 26 0.25C29.1756 0.25 31.75 2.82436 31.75 6Z"
                stroke="#D6A243"
                fill="#F6BE4F"
                stroke-width="0.5"
              />
              <path
                d="M51.75 6C51.75 9.17564 49.1756 11.75 46 11.75C42.8244 11.75 40.25 9.17564 40.25 6C40.25 2.82436 42.8244 0.25 46 0.25C49.1756 0.25 51.75 2.82436 51.75 6Z"
                stroke="#58A942"
                fill="#62C554"
                stroke-width="0.5"
              />
            </svg>
          </Box>
          <LiveEditor
            padding={20}
            style={liveEditorStyle}
            code={`import threading
import time
import unittest
from http.server import BaseHTTPRequestHandler, HTTPServer
from selenium import webdriver
from selenium.webdriver.common.by import By


class TestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/html')
        self.end_headers()
        self.wfile.write(b'<html><head><title>Python Selenium!</title></head>')
        self.wfile.write(b'<body><div id="main">Hello!</div></body>')
        self.wfile.write(b'</body></html>')


class TestRequest(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        server = HTTPServer(('127.0.0.1', 8000), TestHandler)
        cls.server_thread = threading.Thread(target=server.serve_forever, daemon=True)
        cls.server_thread.start()
        time.sleep(1)

        sauce_username = os.environ['SAUCE_USERNAME']
        sauce_access_key = os.environ['SAUCE_ACCESS_KEY']
        url = 'http://{}:{}@ondemand.saucelabs.com/wd/hub'.format(
            sauce_username, sauce_access_key)
        caps = {'browserName': "chrome"}
        caps['platform'] = "Linux"
        caps['version'] = "48.0"
        cls.driver = webdriver.Remote(command_executor=url, desired_capabilities=caps)

    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

    def test_request(self):
        self.driver.get('http://127.0.0.1:8000')
        self.assertEqual('Hello!', self.driver.find_element(By.ID, 'main').text)


if __name__ == '__main__':
    unittest.main()
`}
          />
        </Box>
      </LiveProvider>
    </>
  )
}

export default TestSnippet
