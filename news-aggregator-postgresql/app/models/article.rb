class Article
    def initialize(title, description, url)
        @title=title
        @description = description
        @url = url
end

def self.all
    query_result  = db_connection do |conn|
        conn.exec(
        "SELECT title, description, url FROM articles"
        )
    end

    query_result.to_a
end
end
