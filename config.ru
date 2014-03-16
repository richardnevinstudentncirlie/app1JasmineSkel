use Rack::Static,
  :urls => ["/html", "/js", "/css"],
  :root => "app"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'app, max-age=86400'
    },
    File.open('app/html/index.html', File::RDONLY)
  ]
}

