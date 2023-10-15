CREATE TABLE tb_rockband_blog_comments (
    comment_id int(10) not null auto_increment,
    comment_nome varchar(50),
    comment_email varchar(50),
    comment_commentary varchar(255),
    CONSTRAINT rockbando_blog_comments_pk PRIMARY KEY  (comment_id)
);