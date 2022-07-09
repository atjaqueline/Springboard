from flask_sqlalchemy import SQLAlchemy

DEFAULT_IMAGE = "https://thumbs.dreamstime.com/b/cat-dog-icon-cat-dog-head-icon-simple-smiley-pet-face-vector-illustration-set-131321839.jpg"

db = SQLAlchemy()


class Pet(db.Model):

    __tablename__ = "pets"
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.Text, nullable=False)
    species = db.Column(db.Text, nullable=False)
    photo_url = db.Column(db.Text, nullable=True)
    age = db.Column(db.Integer,nullable=True)
    notes = db.Column(db.Text, nullable=True)
    available = db.Column(db.Boolean, default=True, nullable=False)

    def image_url(self):
      
        return self.photo_url or DEFAULT_IMAGE



def connect_db(app):
    db.app = app
    db.init_app(app)