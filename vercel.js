{
  "headers": [
    {
      "source": "/(.*).gz",
      "headers": [
        {
          "key": "Content-Encoding",
          "value": "gzip"
        },
        {
          "key": "Content-Type",
          "value": "application/octet-stream"
        }
      ]
    },
    {
      "source": "/(.*).br",
      "headers": [
        {
          "key": "Content-Encoding",
          "value": "br"
        },
        {
          "key": "Content-Type",
          "value": "application/octet-stream"
        }
      ]
    },
    {
      "source": "/Build/(.*)",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/wasm"
        }
      ]
    },
    {
      "source": "/Build/*.data",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/octet-stream"
        }
      ]
    },
    {
      "source": "/Build/*.framework.js",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/javascript"
        }
      ]
    }
  ]
}
