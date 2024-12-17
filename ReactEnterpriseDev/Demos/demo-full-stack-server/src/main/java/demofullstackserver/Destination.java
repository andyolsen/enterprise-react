package demofullstackserver;

import jakarta.persistence.*;
import java.util.List;

@Entity
@Table(name="destinations")
public class Destination {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id = null;
	
	private String place;
	private String country;
	private double latitude;
	private double longitude;
	private String info;
	private String image;

	@OneToMany(cascade=CascadeType.ALL, fetch=FetchType.EAGER)
	@JoinColumn(name="destination_id")
	private List<Review> reviews;

	@Override
	public boolean equals(Object other) {
		if (other instanceof Destination) {
			return id == ((Destination)other).id;
		}
		else {
			return false;
		}
	}
	@Override 
	public int hashCode() {
		return id.intValue();
	}

	// Define getters and setters, to enable Jackson to serialize/deserialize fields.
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public double getLongitude() {
		return longitude;
	}

	public void setLongitude(double longitude) {
		this.longitude = longitude;
	}

	public double getLatitude() {
		return latitude;
	}

	public void setLatitude(double latitude) {
		this.latitude = latitude;
	}

	public String getInfo() {
		return info;
	}

	public void setInfo(String info) {
		this.info = info;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public List<Review> getReviews() {
		return reviews;
	}

	public void setReviews(List<Review> reviews) {
		this.reviews = reviews;
	}
}
