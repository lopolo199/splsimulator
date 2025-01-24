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
    }
  ]
}
