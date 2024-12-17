package demofullstackserver;

import jakarta.persistence.*;

@Entity
@Table(name="reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id = null;

	private int rating;
	private String comment;
	private String reviewer;

	// Define getters and setters, to enable Jackson to serialize/deserialize fields.
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public String getReviewer() {
		return reviewer;
	}

	public void setReviewer(String reviewer) {
		this.reviewer = reviewer;
	}

	@Override
	public boolean equals(Object other) {
		if (other instanceof Review) {
			return id == ((Review)other).id;
		}
		else {
			return false;
		}
	}
	@Override
	public int hashCode() {
		return id.intValue();
	}
}
