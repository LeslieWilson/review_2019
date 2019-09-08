require "net/http"
require "active_support/core_ext/hash"
require "pp"

weather_url = "https://forecast.weather.gov/MapClick.php?lat=42.35&lon=-71.06&FcstType=dwml"
uri = URI.parse(weather_url)
dwml.each do |data|
data.each do |item|
    item.each do |location|
        location.each do |key,value|
            if key == "Boston"
                puts '#{key}, #{value}'

                end
            end
        end
    end
end
response = Net::HTTP.get_response(uri)
body = Hash.from_xml(response.body)

pp body
